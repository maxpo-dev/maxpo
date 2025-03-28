// components/ui/file-upload.tsx
"use client"

import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"
import { UploadCloud } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FileUploadProps {
  accept?: string
  onDrop: (files: File[]) => void
}

export function FileUpload({ accept = "*", onDrop }: FileUploadProps) {
  const [file, setFile] = useState<File | null>(null)
  
  const onDropCallback = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0])
      onDrop(acceptedFiles)
    }
  }, [onDrop])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onDropCallback,
    accept: accept ? { [accept]: [] } : undefined,
    maxFiles: 1,
  })

  const removeFile = () => {
    setFile(null)
    onDrop([])
  }

  return (
    <div
      {...getRootProps()}
      className={`flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-6 text-center ${
        isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-gray-400"
      }`}
    >
      <input {...getInputProps()} />
      
      {file ? (
        <div className="flex items-center gap-2">
          <span className="truncate max-w-xs">{file.name}</span>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={(e) => {
              e.stopPropagation()
              removeFile()
            }}
          >
            Remove
          </Button>
        </div>
      ) : (
        <>
          <UploadCloud className="mb-2 h-8 w-8 text-gray-400" />
          <p className="text-sm text-gray-600">
            {isDragActive ? "Drop your file here" : "Drag & drop your file here, or click to select"}
          </p>
          <p className="text-xs text-gray-500 mt-1">PDF up to 5MB</p>
        </>
      )}
    </div>
  )
}