import { useNavigate } from "react-router-dom";
import VerifyIcon from "../../assets/icons/verifyIcon";
import { ActionButton } from "../../components/ui/actionButton";
import {
  ClipboardIconButton,
  ClipboardRoot,
} from "../../components/ui/clipboard";
import { Skeleton } from "../../components/ui/skeleton";
import useUserDetails from "../../utils/useUserDetails";

const Profile = () => {
  const { data, isLoading } = useUserDetails();
  const navigate = useNavigate();
  const onEditProfile = () => {
    navigate("/profile/editProfile");
  };

  const defaultImage =
    data?.user?.gender === "male"
      ? "/assets/placeholder/userMale1.png"
      : "/assets/placeholder/userFemale1.png";

  return (
    <div className="bg-main-bg  rounded-t-[16px] min-h-screen">
      <div className="w-full h-[100px] sm:h-[120px] md:h-[140px] lg:h-[160px] bg-[url('/assets/profile/profileBanner.webp')] bg-cover bg-no-repeat rounded-[16px] relative">
        <div className="bg-main-bg  p-2 h-[140px] w-[140px] rounded-full overflow-hidden absolute bottom-[-70px] left-1/2 transform -translate-x-1/2">
          <img
            src={data?.user?.profileImage || defaultImage}
            alt="profile"
            className="h-full w-full rounded-full object-cover"
          />
        </div>
      </div>

      {isLoading ? (
        <div className="mt-[80px] flex flex-col items-center gap-2">
          <Skeleton height="30px" width="260px" />
          <Skeleton height="20px" width="340px" />{" "}
          <Skeleton height="20px" width="280px" />
        </div>
      ) : (
        <div className="mt-[80px] flex flex-col items-center gap-2">
          <h2 className="text-5xl font-semibold capitalize flex items-center gap-2 text-text-primary">
            {data?.user?.fullName ?? data?.user?.username}
            {data?.user?.isVerified && (
              <span className="text-green-500">
                <VerifyIcon height="30px" width="30px" />
              </span>
            )}
          </h2>

          <ClipboardRoot
            value={data?.user?._id}
            className="flex items-center text-text-secondary "
          >
            <p>{data?.user?._id}</p>
            <ClipboardIconButton />
          </ClipboardRoot>

          <p>{data?.user?.email}</p>

          <ActionButton
            action="edit"
            defaultText
            className="mt-2"
            onClick={onEditProfile}
          />
        </div>
      )}
    </div>
  );
};

export default Profile;
