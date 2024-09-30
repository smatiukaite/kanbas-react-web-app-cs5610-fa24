import "./index.css"
import "./ForegroundColor"
import ForegroundColor from "./ForegroundColor";
import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import Padding from "./Padding";
import Margins from "./Margins";
import Corners from "./Corners";
import Dimentions from "./Dimetions";
import Positions from "./Positions";
import Zindex from "./Zindex";
import Float from "./Float";
import GridLayout from "./GridLayout";
import Flex from "./Flex";

export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>

      {/* 3.1.2 */}
      <h5>3.1.2</h5>
      <h3>Styling with the STYLE attribute</h3>
      {/* <p style={{ backgroundColor: "blue", */}
      {/* color: "white" }}> */}
      <p>
        Style attribute allows configuring look and feel
        right on the element. Although it's very convenient
        it is considered bad practice and you should avoid
        using the style attribute
      </p>

      {/* 3.1.3 */}
      <h5>3.1.3</h5>
      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
          Instead of changing the look and feel of all the
          elements of the same name, e.g., P, we can refer
          to a specific element by its ID
        </p>
        <p id="wd-id-selector-2">
          Here's another paragraph using a different ID and
          a different look and
          feel
        </p>
      </div>

      {/* 3.1.4 */}
      <h5>3.1.4</h5>
      <div id="wd-css-class-selectors">
        <h3>Class selectors</h3>
        <p className="wd-class-selector">
          Instead of using IDs to refer to elements, you
          can use an element's CLASS attribute
        </p>
        <h4 className="wd-class-selector">
          This heading has same style as paragraph above
        </h4>
      </div>

      {/* 3.1.5 */}
      <h5>3.1.5</h5>
      <div id="wd-css-document-structure">
        <div className="wd-selector-1">
          <h3>Document structure selectors</h3>
          <div className="wd-selector-2">
            Selectors can be combined to refer elements in particular
            places in the document
            <p className="wd-selector-3">
              This paragraph's red background is referenced as
              <br />
              .selector-2 .selector3<br />
              meaning the descendant of some ancestor.<br />
              <span className="wd-selector-4">
                Whereas this span is a direct child of its parent
              </span><br />
              You can combine these relationships to create specific
              styles depending on the document structure
            </p>
          </div>
        </div>
      </div>

      {/* 3.1.7 */}
      <div>
        <h5>3.1.7</h5>
        <ForegroundColor />
      </div>

      {/* 3.1.8 */}
      <div>
        <h5>3.1.8</h5>
        <BackgroundColors />
      </div>

      {/* 3.1.9 */}
      <div>
        <h5>3.1.9</h5>
        <Borders />
      </div>

      {/* 3.1.10 */}
      <div>
        <h5>3.1.10</h5>
        <Padding />
      </div>

      <div>
        <Margins />
      </div>

      {/* 3.1.11 */}
      <div>
        <h5>3.1.11</h5>
        <Corners />
      </div>

      {/* 3.1.12 */}
      <div>
        <h5>3.1.12</h5>
        <Dimentions />
      </div>

      {/* 3.1.13 - 3.1.15*/}
      <div>
        <h5>3.1.13 - 3.1.15</h5>
        <Positions />
      </div>

      {/* 3.1.16 */}
      <div>
        <h5>3.1.16</h5>
        <Zindex />
      </div>

      {/* 3.1.17 */}
      <div>
        <h5>3.1.17</h5>
        <Float />
      </div>

      {/* 3.1.18 */}
      <div>
        <h5>3.1.18</h5>
        <GridLayout />
      </div>

      {/* 3.1.19 */}
      <div>
        <h5>3.1.19</h5>
        <Flex />
      </div>









    </div>
  );
}