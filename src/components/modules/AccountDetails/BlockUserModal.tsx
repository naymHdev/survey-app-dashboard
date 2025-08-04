import NSButton from "@/components/ui/core/NSButton";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight, Ban } from "lucide-react";
const BlockUserModal = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <button className=" cursor-pointer">
            <Ban className=" text-red-500 size-5" />
          </button>
        </DialogTrigger>
        <DialogContent>
          <div className="font-sora text-center">
            <h2 className=" text-2xl font-bold text-sc-charcoal-logic">
              Block User
            </h2>
            <p className=" my-4 text-lg text-sc-charcoal-logic">
              Are you sure you want to block this user?
            </p>
            <NSButton className=" w-full rounded-lg py-3 flex items-center justify-center gap-2">
              Confirm <ArrowRight className=" size-6" />
            </NSButton>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BlockUserModal;
