package n1Prova;

import java.util.Scanner;

public class Animal {

    public static void main(String[] args) {
        Scanner ler = new Scanner(System.in);
        Cachorro dog = new Cachorro();
        Papagaio papagaio = new Papagaio();
        Mosca demonio = new Mosca();
             
        System.out.println("Cor do pelo do Dog: ");
        dog.setCorPelo(ler.nextLine());
        
        System.out.println("Cor da pumas do Papagaio: ");
        papagaio.setCorPena(ler.nextLine());
        
        System.out.println("Quantidade de patas tem a mosca: ");
        demonio.setQtdPatas(ler.nextInt());
        
        
        System.out.println(dog);
        System.out.println(papagaio);
        System.out.println(demonio);
        
    }
    
}
