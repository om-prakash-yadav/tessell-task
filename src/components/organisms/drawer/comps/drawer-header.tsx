import { memo } from "react";
import { AppIcons } from "../../../../resources/icons";
import { useDrawerContext } from "../hooks/use-drawer-context";
import FlexContainer from "../../../atoms/flex-container/flex-container";
import IconAction from "../../../atoms/icon-action/icon-action";
import SpacingDivider from "../../../atoms/spacing-divider/spacing-divider";
import { ThemeSpacing } from "../../../../theme/theme";

const DrawerHeader = () => {
  const { toggleDrawer } = useDrawerContext();

  const headerStyles = {
    height: `calc(${ThemeSpacing.variables.GUTTER} * 2)`,
  };

  return (
    <FlexContainer 
      containerHeight={`calc(${ThemeSpacing.variables.GUTTER} * 2)`}
      alignChildren="center"
    >
      <FlexContainer 
        flexValue={1} 
        justifyItems="flex-start" 
        alignChildren="center"
      >
        <AppIcons.TessellLogo width={20.4} height={20.4} />
        <SpacingDivider dividerWidth={4} />
        <AppIcons.TessellTypoLogo height={20} width={40} />
      </FlexContainer>
      <FlexContainer
        containerHeight={32}
        containerWidth={32}
        justifyItems="center"
        alignChildren="center"
      >
        <IconAction
          iconKey="Drawer"
          buttonScale="small"
          accessibilityLabel="Drawer Close"
          buttonStyle="secondary" 
          onClick={toggleDrawer}
        />
      </FlexContainer>
    </FlexContainer>
  );
};

export default memo(DrawerHeader);
