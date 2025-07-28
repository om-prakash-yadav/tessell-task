import { Button } from "../../atoms/button/button";
import FlexContainer from "../../atoms/flex-container/flex-container";
import SpacingDivider from "../../atoms/spacing-divider/spacing-divider";
import { Text } from "../../atoms/text/text";
import DrawerHeader from "./comps/drawer-header";
import { Dropdown } from "../dropdown/dropdown";
import type { DrawerProps } from "./drawer-types";
import type { ButtonProps } from "../../atoms/button/button-types";
import { useMemo } from "react";
import IconAction from "../../atoms/icon-action/icon-action";
import { useDrawerContext } from "./hooks/use-drawer-context";
import { ThemeColors, ThemeSpacing } from "../../../theme/theme";
import { DRAWER_WIDTH } from "./drawer-constants";

const Drawer: React.FC<DrawerProps> = ({
  dropdown,
  menuOptions,
  footerOptions,
}) => {
  const { isDrawerOpen, toggleDrawer } = useDrawerContext();

  const menuBtns = useMemo(
    () =>
      menuOptions.map(
        ({ $icon, label, $isSelected, onClick }) =>
          ({
            $icon,
            $isSelected,
            $size: "regular",
            $type: "tertiary",
            $isHorizontallyCentered: false,
            children: (
              <Text $renderAs="bodyPrimary" $color="inherit">
                {label}
              </Text>
            ),
            onClick: onClick,
            $marginBottom: 8,
          } as ButtonProps)
      ),
    [menuOptions]
  );

  const footerBtns = useMemo(
    () =>
      footerOptions.map(
        ({ $icon, label, $isSelected, onClick }) =>
          ({
            $icon,
            $isSelected,
            $size: "regular",
            $type: "tertiary",
            $isHorizontallyCentered: false,
            children: (
              <Text $renderAs="bodyPrimary" $color="inherit">
                {label}
              </Text>
            ),
            onClick: onClick,
            $marginBottom: 6,
          } as ButtonProps)
      ),
    [footerOptions]
  );

  // Drawer wrapper styles using CSS-in-JS
  const drawerWrapperStyles = {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column' as const,
    width: `${DRAWER_WIDTH}px`,
    transition: 'transform 0.3s ease-in-out',
    transform: isDrawerOpen ? 'translateX(0)' : 'translateX(-100%)',
    padding: `calc(${ThemeSpacing.variables.GUTTER})`,
    backgroundColor: ThemeColors['surface-0'],
    borderRight: `1px solid ${ThemeColors['surface-100']}`,
    zIndex: 1000,
  };

  // Close button wrapper styles
  const closeButtonWrapperStyles = {
    position: 'absolute' as const,
    top: '41%',
    right: '-12px',
    borderRadius: '50%',
    backgroundColor: ThemeColors['surface-0'],
    transition: 'transform 0.3s ease-in-out',
    opacity: isDrawerOpen ? 1 : 0,
  };

  return (
    <div style={drawerWrapperStyles}>
      <FlexContainer flexDirection="column" flexValue={1}>
        <DrawerHeader />
        <SpacingDivider dividerHeight={11} />
        <Button
          $icon="Switcher"
          $size="small"
          $type="tertiary"
          $isHorizontallyCentered={false}
        >
          <Text $renderAs="heading/form titles" $color="primary">
            Apps
          </Text>
        </Button>
        <SpacingDivider dividerHeight={`calc(${ThemeSpacing.variables.GUTTER} / 2)`} />
        {dropdown && (
          <>
            <Dropdown
              $size="default"
              $options={dropdown.options}
              $placeholder="Select an option"
              $value={dropdown.selected}
              onChange={dropdown.handleChange}
            />
            <SpacingDivider dividerHeight={`calc(${ThemeSpacing.variables.GUTTER} / 2)`} />
          </>
        )}
        {menuBtns.map((btnOptions, index) => (
          <Button key={index} {...btnOptions} />
        ))}
        <FlexContainer flexValue={1} />
        {footerBtns.map((btnOptions, index) => (
          <Button key={index} {...btnOptions} />
        ))}
        <SpacingDivider dividerHeight={12} />
      </FlexContainer>
      <div style={closeButtonWrapperStyles}>
        <IconAction
          iconKey="ChevronLeft"
          noBorder={false}
          accessibilityLabel="Close Menu"
          buttonScale="medium"
          iconTint="text-100"
          buttonStyle="primary"
          isCircular={true}
          onClick={toggleDrawer}
        />
      </div>
    </div>
  );
};

export default Drawer;
