import React from 'react';
import ThubnailProductImg from "./ThubnailProductImg.jsx";
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs';


class SelectedMain extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      mainIdx : '0',
      zoom : false
    }

    this.leftClickHandler = this.leftClickHandler.bind(this);
    this.rightClickHandler = this.rightClickHandler.bind(this);
    this.thumbnailClickHandler = this.thumbnailClickHandler.bind(this);
  }


  leftClickHandler() {
    const { selectedImages } = this.props;
    const { mainIdx } = this.state;
    const cur = parseInt(mainIdx);
    this.setState({ mainIdx: (((cur - 1) + selectedImages.length) % selectedImages.length).toString()});
  }


  rightClickHandler() {
    const { selectedImages } = this.props;
    const { mainIdx } = this.state;
    const cur = parseInt(mainIdx);
    this.setState({ mainIdx: ((cur + 1) % selectedImages.length).toString()});
  }

  thumbnailClickHandler(e) {
    const { selectedImages } = this.props;
    const clickedIdx = selectedImages.map(res => res.thumbnail_url).indexOf(e.target.src);
    this.setState({ mainIdx: clickedIdx });
  }

  render () {
    const { mainIdx, zoom } = this.state;
    const { selectedImages } = this.props;
    let selectedProductImg;
    selectedProductImg = (
      <img
        id="po-large-img"
        src={selectedImages[mainIdx].url}
        alt="po-large-img"
      />
    );

    return (
      <div className="po-main">
        <div id="po-all-image">
          {selectedProductImg}
          <ThubnailProductImg selectedImages={this.props.selectedImages} mainIdx={mainIdx} thumbnailClick={this.thumbnailClickHandler} />
          <BsArrowLeftShort className="po-left-arrow clickable" onClick={this.leftClickHandler} />
          <BsArrowRightShort className="po-right-arrow clickable" onClick={this.rightClickHandler} />
        </div>
      </div>
    );
  }
}

export default SelectedMain;