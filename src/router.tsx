import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from ".";
import BoxScene from "./pages/boxScene";
import ModelScene from "./pages/modelScene";

const route = createBrowserRouter([
	{
		path: "/",
		element: <Index />,
	},
	{
		path: "/boxscene",
		element: <BoxScene />,
	},
	{
		path: "/modelscene",
		element: <ModelScene />,
	},
]);

const Router = () => {
	return <RouterProvider router={route} />;
};

export default Router;
