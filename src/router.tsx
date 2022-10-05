import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from ".";
import BoxScene from "./pages/boxScene";
import JordanScene from "./pages/jordanScene";
import ModelScene from "./pages/modelScene";
import ShoeScene from "./pages/shoeScene";
import TextScene from "./pages/textScene";
import WordCloudScene from "./pages/wordCloudScene";

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
	{
		path: "/textscene",
		element: <TextScene />,
	},
	{
		path: "/wordcloudscene",
		element: <WordCloudScene />,
	},
	{
		path: "/shoescene",
		element: <ShoeScene />,
	},
	{
		path: "/jordanscene",
		element: <JordanScene />,
	},
]);

const Router = () => {
	return <RouterProvider router={route} />;
};

export default Router;
