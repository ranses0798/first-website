import { Grid } from "@mui/material";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { Container } from "@mui/system";
import React from "react";
import { BasicList } from "../../common/BasicList";
import { useDispatch, useSelector } from "react-redux";
import { breeds, fetchCatalogue } from "../../redux/breeds/reducers";

const Layout: React.FC<{}> = () => {
  const { breedName } = useParams<{
    breedName: string;
  }>();
  const navigate = useNavigate();

  const allBreeds = useSelector(breeds);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchCatalogue());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (breedName === undefined && allBreeds.length > 0) {
      navigate(`/breed/${allBreeds[0]}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allBreeds]);

  const changeSelectedBreed = (name: string) => {
    navigate(`/breed/${name}`);
  };

  return (
    <Container maxWidth="xl" disableGutters={true}>
      <Grid container>
        <Grid item xs={3}>
          <BasicList
            name="Dog API"
            list={allBreeds}
            selectBreed={changeSelectedBreed}
          />
        </Grid>
        <Grid item xs={9}>
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Layout;
