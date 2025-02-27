"use client";

import React, { useEffect, useState } from "react";
import { Avatar, Card, Col, Row, Button, Modal, Input, Upload, message, Dropdown, Menu, Divider} from "antd";
import { PlusOutlined, UploadOutlined, UserOutlined, DownOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import Chart from 'chart.js/auto';
import type { UploadFile } from 'antd';


const { Item } = Menu;

const Page = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [nama, setNama] = useState('');
  const [nip, setNIP] = useState('');
  const [telp, setTelp] = useState('');
  const [namaPengguna, setNamaPengguna] = useState('');
  const [sandi, setSandi] = useState('');
  const [konfirmasiSandi, setKonfirmasiSandi] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([]);


  const menu = (
    <Menu>
      <Item key="1">
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          <UserOutlined style={{ marginRight: '10px' }}/>Profil
        </a>
      </Item>
      <Item key="2">
        <a style={{ color: 'red'}} target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        <ArrowLeftOutlined style={{ color: 'red', marginRight: '10px' }}/>Keluar
        </a>
      </Item>
    </Menu>
  );
  const handleChange = (info: any) => {
    let fileList = [...info.fileList];
  
    // Limit to one file
    fileList = fileList.slice(-1);
  
    // Handle upload status
    fileList = fileList.map(file => {
      if (file.response) {
        // Handle server response
        if (file.response.status === 'success') {
          file.url = file.response.url; // Set URL if upload is successful
        } else {
          // Show error message if upload fails
          message.error(`${file.name} upload failed: ${file.response.message}`);
          fileList = [];
        }
      }
      return file;
    });
  
    setFileList(fileList);
  };

  const handleButtonClick = () => {
    setModalVisible(true);
};

const handleModalCancel = () => {
    setModalVisible(false);
};

const handleSave = () => {
  // Logika untuk menyimpan data
  setModalVisible(false);
};

    useEffect(() => {
        let config = {
          type: "bar",
          label: '',
          data: {
            labels: [
                "Januari",
                "Februari",
                "Maret",
                "April",
                "Mei",
                "Juni",
                "Juli",
                "Agustus",
                "September",
                "Oktober",
                "November",
                "Desember",
            ],
            datasets: [
                {
                  label: new Date().getFullYear(),
                  backgroundColor: [
                        '#582DD2',
                        '#582DD2',
                        '#582DD2',
                        '#582DD2',
                        '#582DD2',
                        '#582DD2',
                        '#582DD2',
                        '#582DD2',
                        '#582DD2',
                        '#582DD2',
                        '#582DD2',
                        '#582DD2',
                  ],
                  borderColor: [
                        '#582DD2',
                        '#582DD2',
                        '#582DD2',
                        '#582DD2',
                        '#582DD2',
                        '#582DD2',
                        '#582DD2',
                        '#582DD2',
                        '#582DD2',
                        '#582DD2',
                        '#582DD2',
                        '#582DD2',
                  ],
                    borderWidth: 1,
                    data: [65, 59, 80, 81, 56, 55, 40, 30, 45, 20, 70, 90],
                    fill: false,
                    barThickness: 20,
                    borderRadius: {
                    topLeft: 10,
                    topRight: 10, 
                }
          }],
          },
          options: {
            maintainAspectRatio: false,
            responsive: true,
            title: {
              display: false,
              text: "Orders Chart",
            },
            tooltips: {
              mode: "index",
              intersect: false,
            },
            hover: {
              mode: "nearest",
              intersect: true,
            },
            legend: {
              labels: {
                fontColor: "rgba(0,0,0,.4)",
              },
              align: "end",
              position: "bottom",
            },
            scales: {
              xAxes: [
                {
                  display: false,
                  scaleLabel: {
                    display: true,
                    labelString: "Month",
                  },
                  gridLines: {
                    borderDash: [2],
                    borderDashOffset: [2],
                    color: "rgba(33, 37, 41, 0.3)",
                    zeroLineColor: "rgba(33, 37, 41, 0.3)",
                    zeroLineBorderDash: [2],
                    zeroLineBorderDashOffset: [2],
                  },
                },
              ],
              yAxes: [
                {
                  display: true,
                  scaleLabel: {
                    display: false,
                    labelString: "Value",
                  },
                  gridLines: {
                    borderDash: [2],
                    drawBorder: false,
                    borderDashOffset: [2],
                    color: "rgba(33, 37, 41, 0.2)",
                    zeroLineColor: "rgba(33, 37, 41, 0.15)",
                    zeroLineBorderDash: [2],
                    zeroLineBorderDashOffset: [2],
                  },
                },
              ],
            },
          },
        };
        let ctx = document.getElementById("bar-chart").getContext("2d");
        window.myBar = new Chart(ctx, config);
      }, []);

    return (
        <div>
            <div>
                <h1 style={{ fontSize: '25px', fontWeight: 'bold'}}>Dashboard</h1>
                <p style={{ paddingBottom: '20px'}}>Halo, Elisabet. Selamat Datang di Inventaris!</p>
                <Row gutter={[40, 40]}>
                    <Col>
                    <Card className="shadow-card" style={{ width: '300px', height: '150px', display: 'flex', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <img src="ikon.png" style={{ width: '100px', marginRight: '10px' }} />
                          <div>
                            <div style={{ fontSize: '20px', fontWeight: 'bold' }}>20</div>
                            <div>Barang</div>
                          </div>
                        </div>
                      </Card>
                    </Col>
                    <Col style={{ marginLeft: '95px'}}>
                      <Card className="shadow-card" style={{ width: '300px', height: '150px', display: 'flex', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <img src="ikon.png" style={{ width: '100px', marginRight: '10px' }} />
                          <div>
                            <div style={{ fontSize: '20px', fontWeight: 'bold' }}>3</div>
                            <div>Peminjam</div>
                          </div>
                        </div>
                      </Card>
                    </Col>
                    <Col style={{ marginLeft: '95px'}}>
                    <Card className="shadow-card" style={{ width: '300px', height: '150px', display: 'flex', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <img src="ikon.png" style={{ width: '100px', marginRight: '10px' }} />
                          <div>
                            <div style={{ fontSize: '20px', fontWeight: 'bold' }}>5</div>
                            <div>Aktif</div>
                          </div>
                        </div>
                      </Card>
                    </Col>
                    <Button type="primary" onClick={handleButtonClick} icon={<PlusOutlined />} style={{ marginTop: '90px', marginLeft: '110px'}}>Akun Petugas</Button>
                </Row>
                <Modal
                title={<div style={{ fontSize: '20px',  fontWeight: 'bold'}}>Buat Akun Petugas</div>}
                style={{ textAlign: 'center'}}
                width={900}
                visible={modalVisible}
                onCancel={handleModalCancel}
                footer={[
                    <Button key="cancel" onClick={handleModalCancel}>Batal</Button>,
                    <Button style={{ marginRight: '27px'}} key="save" type="primary" onClick={handleSave}>Simpan</Button>
                ]}
                maskStyle={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
                }}
                >
                 <div style={{ marginTop: '70px', marginRight: '70px' }}> {/* Menambahkan margin atas */}
                 <Row gutter={[24, 24]}>
                    <Col span={12}>
                      <Row align="middle">
                        <Col span={8}>
                          <p>Nama</p>
                        </Col>
                        <Col>
                          <Input style={{ marginBottom: '12px', width: '250px', height: '40px' }} placeholder="Nama" value={nama} onChange={(e) => setNama(e.target.value)} />
                        </Col>
                      </Row>
                      <Row align="middle">
                        <Col span={8}>
                          <p>NIP</p>
                        </Col>
                        <Col>
                          <Input style={{ marginBottom: '12px', width: '250px', height: '40px' }} type="string" placeholder="NIP" value={nip} onChange={(e) => setNIP(e.target.value)}  />
                        </Col>
                      </Row>
                      <Row align="middle">
                        <Col span={8}>
                          <p>Telp</p>
                        </Col>
                        <Col>
                          <Input style={{ marginBottom: '12px', width: '250px', height: '40px' }} type="string" placeholder="Telp" value={telp} onChange={(e) => setTelp(e.target.value)} maxLength={12} />
                        </Col>
                      </Row>
                      <Row >
                        <Col span={8}>
                          <p>Unggah Foto</p>
                        </Col>
                        <Col>
                          <Upload
                            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                            listType="picture"
                            fileList={fileList}
                            onChange={handleChange}
                          >
                            <Button  icon={<UploadOutlined />}>Unggah</Button>
                          </Upload>
                        </Col>
                      </Row>
                    </Col>
                    <Col span={12}>
                      <Row align="middle">
                        <Col span={8}>
                          <p>Nama Pengguna</p>
                        </Col>
                        <Col span={8}>
                          <Input style={{ marginBottom: '12px', width: '300px', height: '40px' }} placeholder="Nama Pengguna" value={namaPengguna} onChange={(e) => setNamaPengguna(e.target.value)}/>
                        </Col>
                      </Row>
                      <Row align="middle">
                        <Col span={8}>
                          <p>Sandi</p>
                        </Col>
                        <Col span={8}>
                          <Input.Password style={{ marginBottom: '12px', width: '300px', height: '40px' }} placeholder="Sandi" value={sandi} onChange={(e) => setSandi(e.target.value)} />
                        </Col>
                      </Row>
                      <Row align="middle">
                        <Col span={8}>
                          <p>Konfirmasi Sandi</p>
                        </Col>
                        <Col span={8}>
                          <Input.Password style={{ marginBottom: '12px', width: '300px', height: '40px' }} placeholder="Konfirmasi Sandi" value={konfirmasiSandi} onChange={(e) => setKonfirmasiSandi(e.target.value)} />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
                </Modal>
            </div>
            <div style={{ marginTop: '30px'}}>
            <Row>
                <Col flex="auto">
                    <Card className="shadow-card" style={{ height: '450px', marginRight: '50px'}}>
                        <h1 style={{ fontSize: '15px', color: '#A7A7A7', padding: '10px 15px'}}>Jumlah Peminjaman</h1>
                        <div className="">
                            <canvas id="bar-chart" style={{ height: '35vh', paddingTop: '50px'}}></canvas>
                        </div>
                    </Card>
                </Col>
                <Col>
                    <Card className="shadow-card" style={{ width: '300px', height: '450px', padding: '20px 20px 0'}}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <img src="ikon.png" style={{ width: '100px', marginRight: '10px' }} />
                            <div>
                              <div style={{ fontSize: '20px', fontWeight: 'bold'}}>10</div>
                              <div style={{ color: 'grey'}} >Barang Masuk</div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <img src="ikon.png" style={{ width: '100px', marginRight: '10px' }} />
                          <div>
                            <div style={{ fontSize: '20px', fontWeight: 'bold' }}>4</div>
                            <div style={{ color: 'grey'}}>Barang Keluar</div>
                          </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <img src="ikon.png" style={{ width: '100px', marginRight: '10px' }} />
                          <div>
                            <div style={{ fontSize: '20px', fontWeight: 'bold' }}>2</div>
                            <div style={{ color: 'grey'}}>Barang Rusak</div>
                          </div>
                        </div>
                    </Card>
                  </Col>
            </Row>
            <div style={{ position: 'absolute', top: '20px', right: '100px', display: 'flex', alignItems: 'center'}}>
              <Dropdown overlay={menu} placement="bottomCenter">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Button style={{ width: '175px', height: '50px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="ikon.png" style={{ width: '70px', marginRight: '5px', marginLeft: '-10px'}} />
                      <div>
                          <div style={{ fontSize: '12px', color: 'black', marginRight: '20px'}}>Halo, Elisabet</div>
                        <div  style={{ fontSize: '12px', color: 'grey ', marginRight: '47px'}}>Admin</div>
                      </div>
                    </div>
                  </Button>
                </div>
              </Dropdown>
            </div>
        </div>  
        </div>
    );
        

};

export default Page;
