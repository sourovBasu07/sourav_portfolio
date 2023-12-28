import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { AiOutlineCheckCircle } from "react-icons/ai";

interface Props {
  title: string;
  subtitle: string;
  details: string[];
}

const Modal = ({ title, subtitle, details }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <p>View Details</p>
      </DialogTrigger>
      <DialogContent className="w-[500px] bg-containerColor rounded-3xl pt-20 px-10 pb-10">
        <DialogHeader>
          <DialogTitle className="flex flex-col items-center mb-4 text-h3-font font-medium text-center gap-5">
            <h3 className="text-titleColor">{title}</h3>
            <p className="text-small-font text-textColor font-normal px-14">
              {subtitle}
            </p>
          </DialogTitle>
          <DialogDescription className="px-10">
            {details.map((item) => (
              <div key={item} className="flex items-center gap-2 my-3">
                <span className="text-[1.1rem] text-titleColor">
                  <AiOutlineCheckCircle />
                </span>
                <p className="text-small-font font-normal">{item}</p>
              </div>
            ))}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
export default Modal;
