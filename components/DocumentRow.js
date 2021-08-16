import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { useSession } from "next-auth/client";
import { useRouter } from "next/dist/client/router";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";

function DocumentRow({ id, fileName, date }) {
  const [session] = useSession();
  const router = useRouter();
  const [snapshot] = useCollection(
    db
      .collection("userDocs")
      .doc(session.user.email)
      .collection("docs")
      .orderBy("timestamp", "desc")
  );

  const deleteDoc = (id) => {
    db.collection("userDocs")
      .doc(session.user.email)
      .collection("docs")
      .doc(id)
      .delete()
      .then(() => {
        console.log(`deleted`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex items-center ">
      <div
        onClick={() => router.push(`/doc/${id}`)}
        className="flex flex-grow items-center py-4 rounded-lg hover:bg-gray-100 text-gray-700 text-sm cursor-pointer"
      >
        <Icon name="article" size="3xl" color="blue" />
        <p className="flex-grow pl-5 w-10 pr-10 truncate">{fileName}</p>
        <p className="pr-5 text-sm">{date?.toDate().toLocaleDateString()}</p>

        <Button
          color="gray"
          buttonType="outline"
          rounded={true}
          iconOnly={true}
          ripple="dark"
          className="border-0"
        >
          <Icon name="more_vert" size="3xl" />
        </Button>
      </div>

      <Button
        onClick={() => deleteDoc(id)}
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="border-0"
      >
        <Icon name="delete" size="3xl" />
      </Button>
    </div>
  );
}

export default DocumentRow;
