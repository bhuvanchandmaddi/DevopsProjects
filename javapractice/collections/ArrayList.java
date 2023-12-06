import java.util.*;

class ArrayListDemo{
public static void main(String[] args){
ArrayList <String> names = new ArrayList<String>();
names.add("Bhuvan");
names.add("Chand");
names.add("Maddi");
System.out.println(names);

//Itertae uinsg Iterator objecIterator
Iterator<String> iter=names.iterator();

while(iter.hasNext()){
System.out.println((iter.next()));
}

}
}