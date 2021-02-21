import React, { useState } from "react";
import SearchRoute from "./SearchScreen";
import QueryRoute from "./QueryScreen";
import RecentRoute from "./RecentScreen";
import { BottomNavigation } from "react-native-paper";

const Screen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "search", title: "Search", icon: "search-web", color: "#3F51B5" },
    { key: "query", title: "Query", icon: "chat", color: "#009688" },
    { key: "recents", title: "Contact", icon: "phone", color: "#795548" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    search: SearchRoute,
    query: QueryRoute,
    recents: RecentRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Screen;
