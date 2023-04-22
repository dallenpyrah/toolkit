import { useRouter } from "next/router";

export const HomeNavBarListItem = ({
  path,
  title,
  onClick,
}: {
  path: string;
  title: string;
  onClick?: () => void;
}) => {
  const router = useRouter();
  const { pathname } = router;

  const navigate = async (path: string) => {
      await router.push(path);
    };

  return (
    <h1
      className={`${
        pathname == path ? "text-indigo-500" : "text-white"
      } transition cursor-pointer text-base text-sm lg:text-lg font-bold tracking-tight text-white p-3 hover:text-gray-500`}
      onClick={() => void navigate(path)}
    >
      {title}
    </h1>
  );
};
