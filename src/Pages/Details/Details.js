import React from "react";
import "./Details.scss";
import { Context } from "../../context";
import Back from "../../assets/icons/left-arrow.svg";

class Details extends React.Component {
  state = {
    styles: {
      backgroundColor: this.context.itemForDetailPage.bg_color,
      transform: `translate(${this.context.cords.x}px, ${this.context.cords.y}px)`,
      maxWidth: `${this.context.cords.width}px`,
      height: `${this.context.cords.height}px`,
      borderRadius: "30px"
    }
  };
  componentDidMount() {
    window.scrollTo(0, 0);
    this.context.getDetailPageItem(this.props.match.params.itemId);
    setTimeout(() => {
      const styles = {
        backgroundColor: this.context.itemForDetailPage.bg_color
      };
      this.setState({ styles });
    });
  }

  render() {
    const { itemForDetailPage } = this.context;
    const {
      title,
      img_url,
      description,
      link,
      embed
    } = itemForDetailPage;
    return (
      <div className="details-wrapper">
        <div
          className="img-wrapper"
          style={this.state.styles}
          id={"img-wrapper"}
        >
          <img src={img_url} alt={title} />
        </div>
        <div className="details">
          <span onClick={this.props.history.goBack} className="back">
            <img src={Back} alt="back" width={20} />
            Back to Home
          </span>
          <div className="detail-box">
            <h2>{title}</h2>
          </div>
          <div className="detail-box">
           <p>{description}</p>
          </div>
          <div className="detail-box">
            <p>{link}</p>
          <div className="detail-box">
           <div>{embed}</div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}
Details.contextType = Context;
export default Details;
