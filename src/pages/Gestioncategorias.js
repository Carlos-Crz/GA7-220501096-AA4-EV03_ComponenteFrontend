import React from 'react';
import Layout from '../components/Layout';
import Table from '../components/Table';
import Button from '../components/Button';
import InfoSection from '../components/InfoSection';



function Gcategorias() {
  const GcategoriasData = [
    { Id_categorias: 1, Nombre: 'Lacteos', Ubicacion: 'Pasillo 1, Estante 2', Productos: 10},
  ];
  const GcategoriasColumns = ['Id_categorias', 'Nombre', 'Ubicacion', 'Productos'];
  return (
    <Layout>
      <InfoSection
        title="Gestión de Categorias"
        description="En este módulo usted puede registrar nuevas categorías en el sistema, actualizar la información de las categorías existentes y eliminar categoría si es necesario"
        showSubtitle={false} // Mostrar subtítulo
        showDescription={true} // Mostrar descripción
      />
      <Button text="Nueva Categoria" />
            
      <Table columns={GcategoriasColumns} data={GcategoriasData} />
    </Layout>
  );
}

export default Gcategorias;
