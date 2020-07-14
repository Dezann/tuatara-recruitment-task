import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./WordTabs.scss";

class LetterTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="tabs-wrapper">
        <div className="tabs">
          <Tabs>
            <TabList className="word">
              <Tab>S</Tab>
              <Tab>T</Tab>
              <Tab>A</Tab>
              <Tab>R</Tab>
              <Tab>T</Tab>
            </TabList>

            <TabPanel>
              <div className="tab-content">
                <h1>SUSPENDISSE IACULIS</h1>
                <h3>phasellus finibus phatetra</h3>

                <div className="tab-content__body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  luctus nulla nulla, vel semper lorem dapibus in. Etiam quis
                  vestibulum mauris. Curabitur sed vehicula metus, ut pretium
                  diam vestibulum mauris
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="tab-content">
                <h1> IACULIS SUSPENDISSE</h1>
                <h3>phasellus hatetra</h3>

                <div className="tab-content__body">
                  Phasellus blandit feugiat elit, sit amet consequat ante
                  consequat et. Vivamus urna sem, consectetur ac facilisis ut,
                  volutpat sed augue. Duis purus mi, volutpat nec
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="tab-content">
                <h1>Donec venenatis dapibus</h1>
                <h3>phasellus finibus phatetra</h3>

                <div className="tab-content__body">
                  uspendisse imperdiet tellus a congue vestibulum. Donec
                  venenatis dapibus viverra. Donec in mollis urna. Pellentesque
                  vehicula justo quis tellus venenatis gravida.
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="tab-content">
                <h1>non fermentum erat ipsu</h1>
                <h3>phasellus finibus phatetra</h3>

                <div className="tab-content__body">
                  Duis suscipit purus ut lacus euismod, ut aliquam tellus
                  maximus. Interdum et malesuada fames ac ante ipsum primis in
                  faucibus. Nunc iaculis, risus ac dapibus scelerisque, nulla ex
                  pretium elit, quis ultricies nisl turpis quis massa. Nulla
                  imperdiet posuere dictum. Praesent lobortis, enim in accumsan
                  dignissim,
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="tab-content">
                <h1>SUSPENDISSE IACULIS</h1>
                <h3>imperdiet posuere dictum</h3>

                <div className="tab-content__body">
                  Suspendisse tristique, nisl molestie pulvinar venenatis, felis
                  velit accumsan lorem, non fermentum erat ipsum vitae urna.
                  Duis pulvinar eleifend nisl ut pretium. Suspendisse nec est in
                  ligul
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default LetterTabs;
