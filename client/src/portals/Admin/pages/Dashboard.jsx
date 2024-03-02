import React from "react";
import { Layout, Card, Col, Row } from "antd";
import { DepartmentColumnGraph,MonthColumnGraph, PieGraph } from "../components";

const { Content } = Layout;
const titleStyle = { backgroundColor: "#1A374D", color: "white" };
const innertitleStyle = { backgroundColor: "#2D4263", color: "white" };
function Dashboard() {
  return (
    <Content style={{ margin: "0 25px" }}>
      <div className="container">
        <Card
          className="outer-shadow"
          title="Pre Submision Seminar"
          style={{ minHeight: 300 }}
          headStyle={titleStyle}
        >
          <Row gutter={[40, 40]}>
            <Col xs={24} sm={24} md={12} lg={8}>
              <Card
                className="shadow"
                type="inner"
                title="Applications"
                headStyle={innertitleStyle}
              >
                <div style={{ height: "120px", overflowY: "auto" }}>
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>19JE0538</td>
                        <td>Mrinal Pathak</td>
                        <td>
                          <a href="#">PH6</a>
                        </td>
                      </tr>
                      <tr>
                        <td>19JE0215</td>
                        <td>Ayush Tripathi</td>
                        <td>
                          <a href="#">PH6</a>
                        </td>
                      </tr>
                      <tr>
                        <td>19JE0056</td>
                        <td>Aditya Mishra</td>
                        <td>
                          <a href="#">PH6</a>
                        </td>
                      </tr>
                      <tr>
                        <td>19JE0637</td>
                        <td>Pattewar Darshan</td>
                        <td>
                          <a href="#">PH6</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8}>
              <Card
                className="shadow"
                type="inner"
                title="Expected"
                headStyle={innertitleStyle}
              >
                <div style={{ height: "120px", overflowY: "auto" }}>
                  <p>05/01/2022</p>
                  <p>24/01/2022</p>
                  <p>12/02/2022</p>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8}>
              <Card
                className="shadow"
                type="inner"
                title="Conducted"
                headStyle={innertitleStyle}
              >
                <div style={{ height: "120px", overflowY: "auto" }}>
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>05/01/2022</td>
                        <td>
                          <a href="#">PH7</a>
                        </td>
                      </tr>
                      <tr>
                        <td>24/01/2022</td>
                        <td>
                          <a href="#">PH7</a>
                        </td>
                      </tr>
                      <tr>
                        <td>12/02/2022</td>
                        <td>
                          <a href="#">PH7</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card>
            </Col>
          </Row>
        </Card>
      </div>
      <div className="container">
        <Row gutter={[40, 40]}>
          <Col xs={24} sm={24} md={24} lg={12}>
            <Card
              className="outer-shadow"
              title="Comprehensive Examination"
              style={{ minHeight: 450 }}
              headStyle={titleStyle}
            >
              <Row gutter={[40, 40]}>
                <Col xs={24} sm={24} md={12} lg={12}>
                  <Card
                    className="shadow"
                    type="inner"
                    title="Expected"
                    headStyle={innertitleStyle}
                  >
                    <div style={{ height: "250px", overflowY: "auto" }}>
                      <p>05/01/2022</p>
                      <p>24/01/2022</p>
                      <p>12/02/2022</p>
                      <p>22/02/2022</p>
                      <p>16/03/2022</p>
                      <p>24/03/2022</p>
                    </div>
                  </Card>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12}>
                  <Card
                    className="shadow"
                    type="inner"
                    title="Conducted"
                    headStyle={innertitleStyle}
                  >
                    <div style={{ height: "250px", overflowY: "auto" }}>
                    <table className="table">
                    <tbody>
                      <tr>
                        <td>05/01/2022</td>
                        <td>
                          <a href="#">PH4</a>
                        </td>
                      </tr>
                      <tr>
                        <td>24/01/2022</td>
                        <td>
                          <a href="#">PH4</a>
                        </td>
                      </tr>
                      <tr>
                        <td>12/02/2022</td>
                        <td>
                          <a href="#">PH4</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                    </div>
                  </Card>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12}>
            <Card
              className="outer-shadow"
              title="Thesis Submitted"
              bordered={true}
              headStyle={titleStyle}
            >
              <MonthColumnGraph />
            </Card>
          </Col>
        </Row>
      </div>
      <div className="container">
        <Row gutter={[40, 40]}>
          <Col xs={24} sm={24} md={24} lg={12}>
            <Card
              className="outer-shadow"
              title="Research Proposal Seminar"
              style={{ minHeight: 450 }}
              headStyle={titleStyle}
            >
              <Row gutter={[40, 40]}>
                <Col xs={24} sm={24} md={12} lg={12}>
                  <Card
                    className="shadow"
                    type="inner"
                    title="Expected"
                    headStyle={innertitleStyle}
                  >
                    <div style={{ height: "250px", overflowY: "auto" }}>
                      <p>05/01/2022</p>
                      <p>24/01/2022</p>
                      <p>12/02/2022</p>
                      <p>22/02/2022</p>
                      <p>16/03/2022</p>
                      <p>24/03/2022</p>
                    </div>
                  </Card>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12}>
                  <Card
                    className="shadow"
                    type="inner"
                    title="Conducted"
                    headStyle={innertitleStyle}
                  >
                    <div style={{ height: "250px", overflowY: "auto" }}>
                    <table className="table">
                    <tbody>
                      <tr>
                        <td>05/01/2022</td>
                        <td>
                          <a href="#">PH5</a>
                        </td>
                      </tr>
                      <tr>
                        <td>24/01/2022</td>
                        <td>
                          <a href="#">PH5</a>
                        </td>
                      </tr>
                      <tr>
                        <td>12/02/2022</td>
                        <td>
                          <a href="#">PH5</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                    </div>
                  </Card>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12}>
            <Card
              className="outer-shadow"
              title="Thesis Submitted"
              bordered={true}
              headStyle={titleStyle}
            >
              <DepartmentColumnGraph />
            </Card>
          </Col>
        </Row>
      </div>
      <div className="container">
        <Row gutter={[24, 24]}>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Card
              className="outer-shadow"
              title="Pending consent remainders"
              headStyle={titleStyle}
            >
              <div style={{ height: "150px", overflowY: "auto" }}>
                <table className="table">
                  <thead>
                    <tr>
                      <td>Thesis</td>
                      <td>Examiner</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Translational Data Analytics and Decision Science</td>
                      <td>Oliver Hansen</td>
                    </tr>
                    <tr>
                      <td>
                        Resilient, Sustainable and Global Food Security for
                        Health
                      </td>
                      <td>April Tucker</td>
                    </tr>
                    <tr>
                      <td>Prevention and Treatment of Chronic Brain Injury</td>
                      <td>Virgina Andrews</td>
                    </tr>
                    <tr>
                      <td>
                        Personalized Food and Nutritional Metabolic Profiling to
                        Improve Health.
                      </td>
                      <td>Kell Abott</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Card
              className="outer-shadow"
              title="Pending evaluation remainders"
              headStyle={titleStyle}
            >
              <div style={{ height: "150px", overflowY: "auto" }}>
                <table className="table">
                  <thead>
                    <tr>
                      <td>Thesis</td>
                      <td>Examiner</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Translational Data Analytics and Decision Science</td>
                      <td>Oliver Hansen</td>
                    </tr>
                    <tr>
                      <td>
                        Resilient, Sustainable and Global Food Security for
                        Health
                      </td>
                      <td>April Tucker</td>
                    </tr>
                    <tr>
                      <td>Prevention and Treatment of Chronic Brain Injury</td>
                      <td>Virgina Andrews</td>
                    </tr>
                    <tr>
                      <td>
                        Personalized Food and Nutritional Metabolic Profiling to
                        Improve Health.
                      </td>
                      <td>Kell Abott</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
      <div className="container">
        <Row gutter={[24, 24]}>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Card
              className="outer-shadow"
              title="Theses under evalution"
              style={{ minHeight: 507 }}
              headStyle={titleStyle}
            >
              <table className="table">
                  <tbody>
                    <tr>
                      <td>Translational Data Analytics and Decision Science</td>
                    </tr>
                    <tr>
                      <td>
                        Resilient, Sustainable and Global Food Security for
                        Health
                      </td>
                      
                    </tr>
                    <tr>
                      <td>Prevention and Treatment of Chronic Brain Injury</td>
                    </tr>
                    <tr>
                      <td>
                        Personalized Food and Nutritional Metabolic Profiling to
                        Improve Health.
                      </td>
                    </tr>
                  </tbody>
                </table>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Card
              className="outer-shadow"
              title="Evaluated Theses"
              style={{ minHeight: 200 }}
              headStyle={titleStyle}
            >
              <PieGraph />
            </Card>
          </Col>
        </Row>
      </div>
    </Content>
  );
}

export default Dashboard;
