import React from "react";
import type { BreadcrumbsProps } from "./breadcrumbs-types";
import { Text } from "../../atoms/text/text";
import FlexContainer from "../../atoms/flex-container/flex-container";

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <FlexContainer 
      flexValue={1} 
      flexDirection="row" 
      alignChildren="center"
    >
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <Text $renderAs="bodyXs" $color="subtlest">
            {item.label}
          </Text>

          {index < items.length - 1 && (
            <Text
              $renderAs="bodyXs"
              $marginHorizontal="6px"
              $color="subtlest"
            >
              /
            </Text>
          )}
        </React.Fragment>
      ))}
    </FlexContainer>
  );
};

export default Breadcrumbs;
