import { createContext } from "react";
import { Photo } from "../types/data";

const DataContext = createContext<Photo[]>([]);

export default DataContext;
