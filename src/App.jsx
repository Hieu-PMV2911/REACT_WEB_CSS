import React, {useContext} from "react"
import Intro from "./Components/intro/Intro";
import About from "./Components/about/About";
import ProductList from "./Components/productList/ProductList";
import Contact from "./Components/contact/Contact";
import Toggle from "./Components/toggle/Toggle";
import Footer from "./Components/footer/Footer";
import { ThemeContext } from "./context";

const App = () =>{
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	return <div style={{backgroundColor: darkMode ? "#222" : "#fff" , color: darkMode && "white"}}>
			<Toggle />
			<Intro />
			<About />
			<ProductList />
			<Contact />
			<Footer />
	</div>
}

export default App;