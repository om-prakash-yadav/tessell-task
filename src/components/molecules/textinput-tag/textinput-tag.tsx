import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useState,
} from "react";
import FlexContainer from "../../atoms/flex-container/flex-container";
import InputField from "../../atoms/input-field/input-field";
import type {
  Tag,
  TextInputTagProps,
  TextInputTagRef,
} from "./textinput-tag-types";
import TagItem from "./comps/tag-item";

const TextinputTag = forwardRef<TextInputTagRef, TextInputTagProps>(
  (
    {
      label,
      maxWidth,
      name,
      placeholder,
      $helpText,
      onChange,
      marginBottomX = 0,
    },
    ref
  ) => {
    const txtInputRef = React.useRef<HTMLInputElement>(null);
    const [inputValue, setInputValue] = useState("");
    const [tags, setTags] = useState<Tag[]>([]);
    const [error, setError] = useState<string>("");

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        onChange?.();
        if (e.key === "Enter") {
          e.preventDefault();
          const trimmed = inputValue.trim();
          const isValid = /^[^:]+:[^:]+$/.test(trimmed);

          if (!isValid) {
            setError("Input must be in 'key:value' format.");
            return;
          }

          const isDuplicate = tags.some((tag) => tag.label === trimmed);

          if (isDuplicate) {
            setError("This tag already exists.");
            return;
          }

          const newTag: Tag = {
            id: Date.now().toString(),
            label: trimmed,
          };

          setTags((prev) => [...prev, newTag]);
          setInputValue("");
          setError("");
        }
      },
      [inputValue, onChange, tags]
    );

    const handleRemoveTag = useCallback((id: string) => {
      setTags((prev) => prev.filter((tag) => tag.id !== id));
    }, []);

    useImperativeHandle(ref, () => ({
      getTags: () => tags,
      focus: () => txtInputRef.current?.focus(),
      clear: () => {
        setInputValue("");
        setTags([]);
        setError("");
      },
      removeAllTags: () => {
        setTags([]);
      },
    }));

    return (
      <FlexContainer flexDirection="column" spacing={4} bottomMarginMultiplier={marginBottomX}>
        <InputField
          ref={txtInputRef}
          $label={label}
          name={name}
          placeholder={placeholder}
          $maxWidth={maxWidth}
          $size="default"
          value={inputValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            onChange?.();
            setInputValue(e.target.value);
            if (error) {
              setError("");
            }
          }}
          onKeyDown={handleKeyDown}
          $helpText={
            error ? { message: error, color: "danger-100" } : $helpText
          }
          autoComplete="off"
        />

        <FlexContainer spacing={4} flexWrap="wrap">
          {tags.map((tag) => (
            <TagItem
              key={tag.id}
              label={tag.label}
              onDismiss={() => handleRemoveTag(tag.id)}
            />
          ))}
        </FlexContainer>
      </FlexContainer>
    );
  }
);

export default TextinputTag;
