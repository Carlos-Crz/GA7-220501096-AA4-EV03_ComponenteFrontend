import React from 'react';
import Layout from '../components/Layout';
import Table from '../components/Table';
import Button from '../components/Button';
import InfoSection from '../components/InfoSection';



function Gproductos() {
  const GcategoriasData = [
    { Id_productos: 1, Cod_Barras: '0001100101001', Nombre: 'Haria Pan', Descripcion:'Harina para arepas', Precio: '3.500', Cantidad: 20},
  ];
  const GcategoriasColumns = ['Id_productos', 'Cod_Barras', 'Nombre', 'Descripcion', 'Precio', 'Cantidad'];
  return (
    <Layout>
      <InfoSection
        title="Gestión de Productos"
        description="En este módulo usted puede registrar nuevos productos en el sistema, actualizar la información de los productos existentes y eliminar productos si es necesario"
        showSubtitle={false} // Mostrar subtítulo
        showDescription={true} // Mostrar descripción
      />
      <Button text="Nueva Producto" />
            
      <Table columns={GcategoriasColumns} data={GcategoriasData} />
    </Layout>
  );
}

export default Gproductos;
