import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import BoxScene from "./pages/boxScene";

const route = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/boxscene",
		element: <BoxScene />,
	},
]);

const Router = () => {
	return <RouterProvider router={route} />;
};

export default Router;
