import "./Sidebar.css";
import Category from './Category';
import Color from './Color';
import Blaze from "./Blaze";

function Sidebar({handleChange}) {
    return (
        <div>
            <section className="sidebar">
                <div className="logo-container">
                    <h1>🛒</h1><hr />
                </div>
                <Category handleChange={handleChange}/>
                <Color handleChange={handleChange}/>
                <Blaze handleChange={handleChange}/>
            </section>
        </div>
      );
}

export default Sidebar;