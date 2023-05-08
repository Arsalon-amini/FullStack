import { useState } from "react";
import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { ColorModeSwitch } from "./components/ColorModeSwitch";
import { GameGrid } from "./components/GameGrid";

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
        <GridItem area="nav">
          <HStack justifyContent="space-between">
            <NavBar />
            <ColorModeSwitch />
          </HStack>
        </GridItem>

        <Show above="lg">
          <GridItem area="aside" h="100vh">
            Aside
          </GridItem>
        </Show>

        <GridItem area="main" w="100%" h="100%" >
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
