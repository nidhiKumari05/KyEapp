import React, { useEffect, useState } from 'react';
import { Table, Button } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });
  const [sorter, setSorter] = useState({});
  const [compareList, setCompareList] = useState([]);

  const navigate = useNavigate();

  const columns = [
    {
      title: 'Product Name',
      dataIndex: 'title',
      key: 'title',
      sorter: true,
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      sorter: true,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price) => `$${price}`,
      sorter: true,
    },
    {
      title: 'Stock',
      dataIndex: 'stock',
      key: 'stock',
      sorter: true,
    },
    {
      title: 'Brand',
      dataIndex: 'brand',
      key: 'brand',
      sorter: true,
    },
    {
      title: 'Compare Products',
      key: 'action',
      render: (text, record) => (
        <Button 
          onClick={() => handleCompare(record)} 
          type="primary" 
          style={{ backgroundColor: 'black', borderColor: 'black' }}
          disabled={compareList.some(item => item.id === record.id)}
        >
          Compare Category
        </Button>
      ),
    },
  ];

  const handleCompare = (product) => {
    if (!compareList.some((item) => item.id === product.id)) {
      const updatedCompareList = [...compareList, product];
      setCompareList(updatedCompareList);
      sessionStorage.setItem('compareList', JSON.stringify(updatedCompareList));

      const filteredProducts = products.filter(
        (item) => item.category === product.category
      );

      navigate('/compare', { 
        state: { 
          compareList: filteredProducts, 
          allProducts: products 
        } 
      });
    } else {
      const filteredProducts = products.filter(
        (item) => item.category === product.category
      );

      navigate('/compare', { 
        state: { 
          compareList: filteredProducts, 
          allProducts: products 
        } 
      });
    }
  };

  const fetchProducts = async (page, pageSize, sorter) => {
    setLoading(true);
    try {
      const skip = (page - 1) * pageSize;
      const limit = pageSize;
      const sortField = sorter.field ? sorter.field : 'id';
      const sortOrder = sorter.order === 'ascend' ? 'asc' : 'desc';

      const response = await axios.get(
        `https://dummyjson.com/products?skip=${skip}&limit=${limit}&sortBy=${sortField}&order=${sortOrder}`
      );
      setProducts(response.data.products);
      setPagination((prev) => ({
        ...prev,
        total: response.data.total,
        current: page,
        pageSize: pageSize,
      }));
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleTableChange = (pagination, filters, sorter) => {
    setSorter(sorter);
    setPagination({
      ...pagination,
      total: pagination.total,
    });
  };

  useEffect(() => {
    fetchProducts(pagination.current, pagination.pageSize, sorter);
    
  }, [pagination.current, pagination.pageSize, sorter.field, sorter.order]);

  return (
    <div>
      <h2>Product Table</h2>
      <Table
        columns={columns}
        dataSource={products}
        loading={loading}
        rowKey="id"
        pagination={{
          current: pagination.current,
          pageSize: pagination.pageSize,
          total: pagination.total,
          onChange: (page) => setPagination(prev => ({ ...prev, current: page })), 
          showSizeChanger: false,
          showQuickJumper: false,
        }}
        onChange={handleTableChange}
      />
    </div>
  );
};

export default ProductDetails;
