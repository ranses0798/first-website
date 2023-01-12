import { capitalize } from "lodash";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import React from "react";

type ListProps = {
  breed: string;
  selectBreed: Function;
};

export const ListComponent: React.FC<ListProps> = ({ breed, selectBreed }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton
        onClick={() => {
          selectBreed(breed);
        }}
      >
        <ListItemText
          sx={{ color: "black", justifyContent: "center", textAlign: "center" }}
        >
          {capitalize(breed)}
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );
};
