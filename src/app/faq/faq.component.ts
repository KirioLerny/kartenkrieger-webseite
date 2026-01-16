import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  faqItems: FaqItem[] = [
    {
      question: 'Wie kann ich eine Bestellung aufgeben?',
      answer: 'Du kannst uns einfach per E-Mail, WhatsApp oder über Cardmarket kontaktieren. Teile uns mit, welches Produkt dich interessiert und wir werden dir alle weiteren Details mitteilen.',
      isOpen: false
    },
    {
      question: 'Welche Zahlungsmethoden werden akzeptiert?',
      answer: 'Wir akzeptieren PayPal, Banküberweisung und bei persönlicher Abholung auch Barzahlung. Bei Cardmarket gelten die dortigen Zahlungsbedingungen.',
      isOpen: false
    },
    {
      question: 'Wie lange dauert der Versand?',
      answer: 'Der Versand innerhalb Deutschlands dauert in der Regel 2-4 Werktage. Bei internationalen Sendungen kann es je nach Zielland 5-14 Werktage dauern.',
      isOpen: false
    },
    {
      question: 'Kann ich die Produkte vor dem Kauf ansehen?',
      answer: 'Ja, bei Interesse an einem Produkt können wir dir gerne weitere Bilder oder Videos zusenden. Kontaktiere uns einfach über einen der angebotenen Kanäle.',
      isOpen: false
    },
    {
      question: 'Bietet ihr auch Rückgabe oder Umtausch an?',
      answer: 'Ja, wir bieten eine 14-tägige Rückgabemöglichkeit, sofern das Produkt unbenutzt und im Originalzustand ist. Die Rücksendekosten trägt der Käufer.',
      isOpen: false
    },
    {
      question: 'Sind die Deckboxen für alle Kartenspiele geeignet?',
      answer: 'Unsere Deckboxen sind primär für Standard-Kartengröße (Magic: The Gathering, Pokémon, Yu-Gi-Oh!, etc.) konzipiert. Bei speziellen Größen kontaktiere uns bitte vorher.',
      isOpen: false
    },
    {
      question: 'Kann ich individuelle Anpassungen bestellen?',
      answer: 'Ja, wir bieten auf Anfrage individuelle Anpassungen an. Dies kann Farbwünsche, Gravuren oder spezielle Designs umfassen. Kontaktiere uns für ein individuelles Angebot.',
      isOpen: false
    },
    {
      question: 'Wo befindet ihr euch?',
      answer: 'Wir sind in Karlsruhe, Deutschland ansässig. Persönliche Abholung ist nach Absprache möglich.',
      isOpen: false
    }
  ];

  constructor(private router: Router) {}

  toggleFaq(index: number): void {
    this.faqItems[index].isOpen = !this.faqItems[index].isOpen;
  }

  goToHome(): void {
    void this.router.navigate(['/']);
  }
}
