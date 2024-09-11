import React from 'react';
import Layout from '../components/Layout';
import Table from '../components/Table';
import Button from '../components/Button';
import InfoSection from '../components/InfoSection';



function Gcajas() {
  const GcategoriasData = [
    { Id_cajas: 1, Numero_caja: '001', Efectivo: '200.000', Usuario_asignado: 'Felipe Diaz', Estado: 'Activa' },
  ];
  const GcategoriasColumns = ['Id_cajas', 'Numero_caja', 'Efectivo', 'Usuario_asignado', 'Estado'];
  return (
    <Layout>
      <InfoSection
        title="Gestión de Cajas"
        description="En este módulo usted puede registrar nuevas cajas en el sistema, actualizar la información de las cajas existentes y eliminar cajas si es necesario"
        showSubtitle={false} // Mostrar subtítulo
        showDescription={true} // Mostrar descripción
      />
      <Button text="Nueva Caja" />
            
      <Table columns={GcategoriasColumns} data={GcategoriasData} />
    </Layout>
  );
}

export default Gcajas;
