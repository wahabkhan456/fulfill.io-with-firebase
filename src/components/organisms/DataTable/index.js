import { useState } from "react";
import { TableContainer } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "../../atoms";
import { CustomizeTable } from "../../molecules";
import getPhotosAction from "../../../redux/actions/getPhotosAction";
import InfiniteScroll from "react-infinite-scroll-component";
import styles from "./styles.module.css";

export default function DataTable({ columns }) {
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const { photos, error } = useSelector((state) => state.PhotosReducer);

  const dispatch = useDispatch();

  const fetchMoreData = () => {
    if (error) {
      setHasMore(false);
      return;
    }

    setPage(page + 1);
    dispatch(getPhotosAction(page));
  };

  return (
    <TableContainer className={styles.tableStyles}>
      <InfiniteScroll
        height='70vh'
        next={fetchMoreData}
        dataLength={photos.length}
        hasMore={hasMore}
        loader={<Spinner />}
        scrollThreshold='93%'
      >
        <CustomizeTable columns={columns} />
      </InfiniteScroll>
    </TableContainer>
  );
}
