import java.util.*;

class HashsetDemo{
public static void main(String[] args){
Set<String> names = new HashSet<String>();
names.add("Chand");
names.add("Maddi");
names.add("Maddi");
names.add("Bhuvan");


System.out.println(names);

//Itertae uinsg Iterator objecIterator
Iterator<String> iter=names.iterator();

while(iter.hasNext()){
System.out.println((iter.next()));
}

}
}