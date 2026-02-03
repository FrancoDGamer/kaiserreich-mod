
const tooltipList = [{
    searchString: "SP",
    explanationText: "<img src=img/ps_a.png> The Socialist Party of Germany. <br> (Sozialistische Partei)"
}];


const colourList = [{
        word: "SP",
        style: "color: #BA0000; font-weight: bold;",
        img: "img/ps.png" // this line is not mandatory
    }


.mytooltip {
  position: relative;
  cursor: pointer;
  background-color: rgb(100, 140, 220, 0.5);
  padding: 2px 5px;
}

.mytooltip:hover { background-color: rgb(100, 140, 220); }

.mytooltip .mytooltiptext {
  position: fixed;
  z-index: 999999;
  width: 260px;
  background: #fff4e6;
  color: #3b1f0a;
  text-align: left;
  border-radius: 8px;
  padding: 12px 14px;
  opacity: 0;
  transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;
  border: 1px solid #b22222;
  pointer-events: none;
  font-size: 14px !important;
  line-height: 1.5em !important;
  font-weight: 500 !important;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  transform: translateY(5px);
  text-align: center;
}

.mytooltip:hover .mytooltiptext { opacity: 1; }
.mytooltip .mytooltiptext img { display: block; margin: 0 auto 4px auto; max-width: 90%; height: auto; }

.mytooltip .mytooltiptext {
  bottom: auto;
  top: calc(var(--mouse-y, 0px) - 20px);
  left: calc(var(--mouse-x, 0px));
  transform: translate(-50%, -100%);
}
