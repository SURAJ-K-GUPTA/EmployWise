import React from 'react';
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  userName: string;
  error: string | null;
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  userName,
  error,
}) => {
  // ✅ Ensure useSelector is inside the component
  const loading = useSelector((state: RootState) => state.users.loading);

  // ✅ Prevent render issues with an early return
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center">
      {/* Background overlay */}
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        onClick={onClose}
      />

      {/* Modal panel */}
      <div className="relative z-10 bg-white rounded-lg shadow-xl w-full max-w-md p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-900">
            Delete User
          </h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✖
          </button>
        </div>

        <p className="mt-2 text-sm text-gray-500">
          Are you sure you want to delete <strong>{userName}</strong>? This action cannot be undone.
        </p>

        {error && (
          <p className="mt-2 text-sm text-red-600">
            {error}
          </p>
        )}

        <div className="mt-4 flex justify-end space-x-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="submit"
            onClick={onConfirm}
            disabled={loading}
            className={`px-4 py-2 text-white rounded-md ${
              loading ? 'bg-red-300 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'
            }`}
          >
            {loading ? 'Deleting...' : 'Delete'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
