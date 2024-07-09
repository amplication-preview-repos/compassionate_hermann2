import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { BrushList } from "./brush/BrushList";
import { BrushCreate } from "./brush/BrushCreate";
import { BrushEdit } from "./brush/BrushEdit";
import { BrushShow } from "./brush/BrushShow";
import { DrawingList } from "./drawing/DrawingList";
import { DrawingCreate } from "./drawing/DrawingCreate";
import { DrawingEdit } from "./drawing/DrawingEdit";
import { DrawingShow } from "./drawing/DrawingShow";
import { StrokeList } from "./stroke/StrokeList";
import { StrokeCreate } from "./stroke/StrokeCreate";
import { StrokeEdit } from "./stroke/StrokeEdit";
import { StrokeShow } from "./stroke/StrokeShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { FillColorList } from "./fillColor/FillColorList";
import { FillColorCreate } from "./fillColor/FillColorCreate";
import { FillColorEdit } from "./fillColor/FillColorEdit";
import { FillColorShow } from "./fillColor/FillColorShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"DrawingAppService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Brush"
          list={BrushList}
          edit={BrushEdit}
          create={BrushCreate}
          show={BrushShow}
        />
        <Resource
          name="Drawing"
          list={DrawingList}
          edit={DrawingEdit}
          create={DrawingCreate}
          show={DrawingShow}
        />
        <Resource
          name="Stroke"
          list={StrokeList}
          edit={StrokeEdit}
          create={StrokeCreate}
          show={StrokeShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="FillColor"
          list={FillColorList}
          edit={FillColorEdit}
          create={FillColorCreate}
          show={FillColorShow}
        />
      </Admin>
    </div>
  );
};

export default App;
