import { PageHeader } from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';

export default function EditContact() {
  return (
    <>
      <PageHeader
        title="Editar Lorenzo de Souza"
      />

      <ContactForm
        buttonLabel="Salvar Alterações"
      />
    </>
  );
}
