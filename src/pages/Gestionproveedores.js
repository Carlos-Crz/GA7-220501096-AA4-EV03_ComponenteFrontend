import React from 'react';
import Layout from '../components/Layout';
import Table from '../components/Table';
import Button from '../components/Button';
import InfoSection from '../components/InfoSection';



function Gproveedores() {
  const GcategoriasData = [
    { Id_proveedores: 1, Proveedor: 'Alpina', Encargado: 'Mario', Telefono:'3205417895', Email: 'mario@gmail.com', Cantidad: 20},
  ];
  const GcategoriasColumns = ['Id_proveedores', 'Proveedor', 'Encargado', 'Telefono', 'Email'];
  return (
    <Layout>
      <InfoSection
        title="Gestión de Proveedores"
        description="En este módulo usted puede registrar nuevos proveedores en el sistema, actualizar la información de los proveedores existentes y eliminar proveedores si es necesario"
        showSubtitle={false} // Mostrar subtítulo
        showDescription={true} // Mostrar descripción
      />
      <Button text="Nuevo Proveedor" />
            
      <Table columns={GcategoriasColumns} data={GcategoriasData} />
    </Layout>
  );
}

export default Gproveedores;
