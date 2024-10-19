import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, Button,Col, Modal, Table, Pagination } from 'antd';


const CompareProducts = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { compareList } = location.state || { compareList: [] }; 
    const { allProducts } = location.state || { allProducts: [] };
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 3;
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = compareList.slice(indexOfFirstProduct, indexOfLastProduct);

    const handleRemove = (id) => {
        const updatedCompareList = compareList.filter(item => item.id !== id);
        navigate('/compare', { state: { compareList: updatedCompareList } });
    };

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        const updatedCompareList = [...compareList, ...selectedProducts];
        navigate('/compare', { state: { compareList: updatedCompareList } }); 
        setIsModalVisible(false);
        setSelectedProducts([]);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleSelectProduct = (product) => {
        if (selectedProducts.some((item) => item.id === product.id)) {
            return; 
        }
        if (selectedProducts.length < 4) {
            setSelectedProducts([...selectedProducts, product]);
        }
    };

    const handleDeselectProduct = (id) => {
        setSelectedProducts(selectedProducts.filter(product => product.id !== id));
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const columns = [
        {
            title: 'Product',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Button 
                    onClick={() => handleSelectProduct(record)} 
                    disabled={selectedProducts.some(item => item.id === record.id) || compareList.some(item => item.id === record.id)}
                >
                    Add
                </Button>
            ),
        },
    ];

    return (
        <div>
            <div className='d-flex justify-content-between'>
                <h2>Compare Products</h2>
                <Button 
                    type="primary" 
                    style={{ backgroundColor: 'black', borderColor: 'black' }}
                    onClick={showModal}
                >
                    Add More
                </Button>
            </div>
            
            <div className='d-flex flex-wrap mt-3' style={{ overflowY: "auto" }}>
                {compareList.length > 0 ? (
                    currentProducts.map((product) => (
                        <Col span={8} key={product.id}>
                            <Card title={product.title} bordered={true}>
                                <img src={product.thumbnail} alt={product.title} style={{ width: '100%',height:"300px"}} />
                                <p><strong>Price:</strong> ${product.price}</p>
                                <p><strong>Category:</strong> {product.category}</p>
                                <p><strong>Brand:</strong> {product.brand}</p>
                                <p><strong>Description:</strong> {product.description}</p>
                                <Button 
                                    onClick={() => handleRemove(product.id)} 
                                    type="primary"
                                    style={{ backgroundColor: 'black', borderColor: 'black' }}
                                >
                                    Remove
                                </Button>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <p>No products to compare</p>
                )}
            </div>

            
            <Pagination 
                current={currentPage} 
                total={compareList.length} 
                pageSize={productsPerPage} 
                onChange={handlePageChange}
                style={{ marginTop: '20px', textAlign: 'center' ,display:"flex",justifyContent:"center"}}
            />

            <Modal 
                title="Add More Products" 
                open={isModalVisible} 
                onOk={handleOk} 
                onCancel={handleCancel}
                styles={{ maxHeight: '400px', overflowY: 'auto' }} 
                centered 
            >
                <Table 
                    dataSource={allProducts} 
                    columns={columns} 
                    rowKey="id"
                    pagination={false}
                    scroll={{ x: 800, y: 240 }}
                    footer={() => (
                        <div>
                            <h4>Products selected: {selectedProducts.length}/4</h4>
                            <ul>
                                {selectedProducts.map(product => (
                                    <li key={product.id}>
                                        {product.title} <Button onClick={() => handleDeselectProduct(product.id)}>Remove</Button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                />
            </Modal>
        </div>
    );
};

export default CompareProducts;
