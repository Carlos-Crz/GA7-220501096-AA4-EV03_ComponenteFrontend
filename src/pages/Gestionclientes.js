import React from 'react';
import Layout from '../components/Layout';
import Table from '../components/Table';
import Button from '../components/Button';
import InfoSection from '../components/InfoSection';



function Gclientes() {
  const GcategoriasData = [
    { Id_clientes: 1, Documento: '986547123', Nombre: 'Oscar', Telefono:'3205417895', Email: 'mario@gmail.com'},
  ];
  const GcategoriasColumns = ['Id_clientes', 'Documento', 'Nombre', 'Telefono', 'Email'];
  return (
    <Layout>
      <InfoSection
        title="Gestión de Clientes"
        description="En este módulo usted puede registrar nuevos clientes en el sistema, actualizar la información de los clientes existentes y eliminar clientes si es necesario"
        showSubtitle={false} // Mostrar subtítulo
        showDescription={true} // Mostrar descripción
      />
      <Button text="Nuevo Cliente" />
            
      <Table columns={GcategoriasColumns} data={GcategoriasData} />
    </Layout>
  );
}

export default Gclientes;
