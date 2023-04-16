import { useRouter } from "next/router";

export const HomeNavBarListItem = ({
  path,
  title,
}: {
  path: string;
  title: string;
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
      } transition cursor-pointer text-md font-bold ml-10 tracking-tight text-white p-3 hover:text-gray-500`}
      onClick={() => void navigate(path)}
    >
      {title}
    </h1>
  );
};
