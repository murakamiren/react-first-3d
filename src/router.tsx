import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from ".";
import BoxScene from "./pages/boxScene";

const route = createBrowserRouter([
	{
		path: "/",
		element: <Index />,
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
