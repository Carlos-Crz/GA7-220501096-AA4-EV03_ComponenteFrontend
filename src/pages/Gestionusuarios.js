import React from 'react';
import Layout from '../components/Layout';
import Table from '../components/Table';
import Button from '../components/Button';
import InfoSection from '../components/InfoSection';



function Gusuarios() {
  const GcategoriasData = [
    { Id_usuarios: 1, Documento: '1234567890', Nombre: 'Felipe Diaz', Telefono:'3164217895', Email: 'felipe@gmail.com', Cargo: 'Cajero' },
  ];
  const GcategoriasColumns = ['Id_usuarios', 'Documento', 'Nombre', 'Telefono', 'Email', 'Cargo'];
  return (
    <Layout>
      <InfoSection
        title="Gestión de Usuarios"
        description="En este módulo usted puede registrar nuevos Usuarios en el sistema, actualizar la información de los usuarios existentes y eliminar usuarios si es necesario"
        showSubtitle={false} // Mostrar subtítulo
        showDescription={true} // Mostrar descripción
      />
      <Button text="Nuevo Usuario" />
            
      <Table columns={GcategoriasColumns} data={GcategoriasData} />
    </Layout>
  );
}

export default Gusuarios;
