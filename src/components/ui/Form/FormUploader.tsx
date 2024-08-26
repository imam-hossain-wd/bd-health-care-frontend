"use client";
import { Controller, useFormContext } from 'react-hook-form';
import React, { useState, useCallback } from 'react';
import { Info, Trash } from 'phosphor-react';
import Image from 'next/image';
// import uploadIcon from '../../assets/images.png';

interface FileUploaderProps {
  value?: File[];
  onChange?: (files: File[]) => void;
}

interface FormUploaderProps {
  name: string;
  label?: string;
}

const FormUploader: React.FC<FormUploaderProps> = ({ name, label }) => {
  const { control } = useFormContext();

  return (
    <div>
      {label && <label className="block mb-2 text-sm font-medium text-gray-700">{label}</label>}
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <FileUploader
            value={value}
            onChange={onChange}
          />
        )}
      />
    </div>
  );
};

export default FormUploader;





const FileUploader: React.FC<FileUploaderProps> = ({ value = [], onChange = () => {} }) => {
  const [files, setFiles] = useState<File[]>(value);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const updatedFiles = [...files, ...acceptedFiles];
    setFiles(updatedFiles);
    onChange(updatedFiles);
  }, [files, onChange]);

  return (
    <div className="border border-gray-300 rounded-lg p-4 w-80">
      <div
        className="flex items-center justify-center p-4 border border-dashed border-gray-300 rounded-md cursor-pointer"
        onClick={() => document?.getElementById('fileInput')?.click()}
      >
        <div className="flex">
          {/* <Image width={40} height={40} className="-ml-5" src={uploadIcon} alt="folder" /> */}
          <div className="ml-7">
            <p className="font-medium text-gray-600">Choose File to Upload</p>
            <p className="text-sm text-gray-400">PDF and JPG formats</p>
          </div>
        </div>
      </div>
      <input
        id="fileInput"
        type="file"
        className="hidden"
        multiple
        onChange={(e) => onDrop(Array.from(e.target.files || []))}
      />

      {files.length > 0 && (
        <div className="mt-4">
          <p className="flex items-center gap-1 text-sm text-gray-600">
            <Info size={16} />
            Uploaded Files
          </p>
          <ul className="mt-2 space-y-1">
            {files.map((file) => (
              <li
                key={file.name}
                className="flex items-center justify-between p-2 border-l-4 border-gray-100 bg-gray-50 rounded-md text-sm text-gray-600"
              >
                {file.name}
                <Trash size={16} color="red" className="cursor-pointer" onClick={() => setFiles(files.filter(f => f.name !== file.name))} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};


