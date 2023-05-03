import { useState } from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`, //1024px
        }}
        gap={6}
      >
        <GridItem area="nav" >
          <NavBar />
        </GridItem>
      
        <Show above="lg">
          <GridItem area="aside" w="100%" h="10" bg="blue.500">
            Aside
          </GridItem>
        </Show>

        <GridItem area="main" w="100%" h="50vh" bg="blue.500">
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
