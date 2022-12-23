import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { Divider, Typography } from "@mui/material";
import { themePalette } from "../config/theme.config";
import { ListComponent } from "../components/List";

interface IBasicListProps {
  name: string;
  list: string[];
  selectBreed: Function;
}

export const BasicList: React.FC<IBasicListProps> = ({ name, list, selectBreed }) => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: themePalette.SILVER_PINK,
        height: "100%",
      }}
    >
      <nav aria-label="main mailbox folders">
        <Typography variant="h6" noWrap component="div" color={"black"} textAlign={"center"}>
          {name}
        </Typography>
        <Divider />
        <List>
          {list.map((b: string) => (
            <ListComponent breed={b} key={b} selectBreed={selectBreed} />
          ))}
        </List>
      </nav>
    </Box>
  );
};
