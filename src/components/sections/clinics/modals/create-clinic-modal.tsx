"use client";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAxios, useClinics, useCreateClinicModal } from "@/hooks";
import { CreateClinicSchema } from "@/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

export const CreateClinicModal = () => {
  const modal = useCreateClinicModal();
  const { post } = useAxios();
  const { refetch } = useClinics();

  const form = useForm<z.infer<typeof CreateClinicSchema>>({
    resolver: zodResolver(CreateClinicSchema),
    defaultValues: {
      name: "",
      address: "",
      longitude: 0,
      latitude: 0,
      adults: false,
      children: false,
      phone_number: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof CreateClinicSchema>) => {
    const promise = post("/clinician/clinic/create", { ...values });
    toast.promise(promise, {
      loading: "Membuat klinik baru",
      success: "Klinik berhasil dibuat!",
      error: "Terjadi kesalahan",
    });
    await promise.finally(() => {
      setTimeout(() => {
        refetch();
        form.reset();
        modal.onClose();
      }, 2000);
    });
  };

  const handleClose = () => {
    form.reset();
    modal.onClose();
  };

  return (
    <AlertDialog open={modal.isOpen}>
      <AlertDialogContent>
        <AlertDialogHeader className="space-y-2">
          <div className="relative flex flex-col justify-center items-center w-full">
            <div className="flex flex-row justify-center items-center w-full">
              <h1 className="w-full text-2xl font-semibold">Buat Klinik</h1>
              <X
                size={18}
                className="relative text-gray-400 cursor-pointer"
                onClick={handleClose}
              />
            </div>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full h-full flex flex-col items-start justify-start space-y-4"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Alamat</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Nomor telepon
                      <span className="font-normal text-sm text-muted-foreground">
                        {" "}
                        (optional)
                      </span>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="relative w-full flex flex-row space-x-2">
                <FormField
                  control={form.control}
                  name="longitude"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Longitude</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="latitude"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Latitude</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="clinic_type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tipe</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih tipe deteksi" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="GENERAL">General</SelectItem>
                        <SelectItem value="LINGSIX">Ling Six</SelectItem>
                        <SelectItem value="ALL">All</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="relative w-full flex flex-col space-y-2 pb-2">
                <FormLabel className="mb-2">Layanan untuk</FormLabel>
                <div className="relative w-full flex flex-row">
                  <FormField
                    control={form.control}
                    name="adults"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel className="space-y-1 leading-none font-normal">
                          Dewasa
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="children"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel className="space-y-1 leading-none font-normal">
                          Anak
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <Button type="submit" className="w-full">
                Simpan
              </Button>
            </form>
          </Form>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
};
