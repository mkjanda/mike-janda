# Michael K. Janda

**Founder, IAT Software | Full-Stack & Client-Side Engineer**  
Norfolk, VA | [michael@iatsoftware.net](mailto:michael@iatsoftware.net) | [757.275.3477](tel:7572753477)  
[LinkedIn](https://www.linkedin.com/in/michael-k-janda) | [Website](https://iatsoftware.net) | [GitHub](https://github.com/mkjanda)

## What I Build

I design and ship production-grade software that researchers at institutions like **Oxford** and **Princeton** actually use.

For over 15 years I have owned the entire lifecycle of **IAT Software** — a complete SaaS platform that lets non-technical users (graduate students, high-school psychology classes, academic labs) create and administer **unfalsifiable Implicit Association Tests** based on Harvard University’s methodology.

### Current Focus: IAT Design WPF Rewrite
I am currently rewriting the original 600+ class WinForms client into a modern, maintainable WPF application using current .NET best practices.

**Why the rewrite?**  
The original WinForms codebase delivered real value but had grown into a maintenance burden. The new version uses:

- **Clean Domain-Driven Design** with rich models (no anemic DTOs)
- **MVVM** + CommunityToolkit.Mvvm for clean, testable ViewModels
- **System.IO.Packaging** for a single, self-contained `.iat` project file
- Observable domain objects, proper aggregate roots, and focused services
- Embedded fonts, pre-rendered text stimuli, and high-fidelity image handling

This rewrite is being done the right way — deliberate, layered, and built to last.

**Live repositories:**
- [IAT-Design-WPF](https://github.com/mkjanda/IAT-Design-WPF) ← *current rewrite (active)*
- [IAT-Design](https://github.com/mkjanda/IAT-Design) ← original WinForms client
- [IAT-Server](https://github.com/mkjanda/IAT-Server) ← Java backend (Hibernate/JPA + XSLT)

## Technical Expertise

**Languages**  
C# • Java • JavaScript • SQL • XSLT

**Modern Client Stack (2026 standard)**  
WPF • MVVM • CommunityToolkit.Mvvm • System.Text.Json • System.IO.Packaging

**Backend & Infrastructure**  
Spring • Hibernate/JPA • Message-Driven Beans • WebSockets • Linux administration

**Specialties**  
- Complex multithreaded image generation & Bitmap caching (reduced memory footprint from ~1 GB → 55 MB)
- Rich domain models with zero side effects
- Package-based file formats that guarantee pixel-perfect stimulus rendering
- End-to-end encryption and data security even if the database is compromised

## Philosophy

I don’t chase frameworks — I ship maintainable, correct software.  
Every line in the WPF rewrite is written with the same discipline I used to get the original product adopted by world-class institutions: clear separation of concerns, rich domain logic, and services that own infrastructure only.

If you’re evaluating me for a senior desktop, full-stack, or research-tool role, this profile and the IAT-Design-WPF repository are the best evidence of how I work today.

## Get in Touch

- Professional inquiries: michael@iatsoftware.net
- Want to see the live IAT platform? → [iatsoftware.net](https://iatsoftware.net)
- Open to consulting or contract work on complex desktop or scientific applications

---

*Last updated: April 2026*  
Built with the same care I put into every line of production code.
