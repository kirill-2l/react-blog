import React from 'react';
import { Breadcrumb as BreadcrumbAntd }  from 'antd';
const Breadcrumb = () => {
  return (
    <BreadcrumbAntd
    className='breadcrumbs'
    >
      <BreadcrumbAntd.Item>Home</BreadcrumbAntd.Item>
      <BreadcrumbAntd.Item>List</BreadcrumbAntd.Item>
      <BreadcrumbAntd.Item>App</BreadcrumbAntd.Item>
    </BreadcrumbAntd>
  )
}
export default Breadcrumb;
