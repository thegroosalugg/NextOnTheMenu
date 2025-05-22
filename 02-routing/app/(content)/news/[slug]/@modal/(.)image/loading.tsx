import LoadingComponent from '@/components/boundary/Loading';
import Modal from '@/components/modal/Modal';

export default function Loading() {
  return (
    <Modal>
      <LoadingComponent msg='Loading image' />;
    </Modal>
  );
}
