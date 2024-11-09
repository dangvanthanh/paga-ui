# DB

## 1

erDiagram
    Users {
        int UserID PK
        string Username
        string Email
        string PasswordHash
        date JoinDate
        string Bio
    }
    
    Movies {
        int MovieID PK
        string Title
        int ReleaseYear
        string Genre
        string Director
        string Synopsis
    }
    
    Reviews {
        int ReviewID PK
        int UserID FK
        int MovieID FK
        int Rating
        string ReviewText
        date ReviewDate
    }
    
    Lists {
        int ListID PK
        int UserID FK
        string ListName
        string Description
        date CreationDate
    }
    
    ListMovies {
        int ListID FK
        int MovieID FK
    }
    
    Followers {
        int FollowerID PK
        int UserID FK
        int FollowerUserID FK
    }
    
    Watchlist {
        int WatchlistID PK
        int UserID FK
        int MovieID FK
    }
    
    Users ||--o{ Reviews : "writes"
    Movies ||--o{ Reviews : "has"
    Users ||--o{ Lists : "creates"
    Lists ||--o{ ListMovies : "contains"
    Movies ||--o{ ListMovies : "is in"
    Users ||--o{ Followers : "follows"
    Users ||--o{ Watchlist : "has"
    Movies ||--o{ Watchlist : "is in"

## 2

erDiagram
    Salons {
        int SalonID PK
        string SalonName
        string Address
        string PhoneNumber
    }
    
    Employees {
        int EmployeeID PK
        string FirstName
        string LastName
        string Position
        date HireDate
        decimal Salary
        int SalonID FK
    }
    
    Services {
        int ServiceID PK
        string ServiceName
        int Duration
        decimal Price
        int SalonID FK
    }
    
    Appointments {
        int AppointmentID PK
        string CustomerName
        int EmployeeID FK
        int ServiceID FK
        datetime AppointmentDateTime
        int SalonID FK
    }
    
    Salaries {
        int SalaryID PK
        int EmployeeID FK
        date PaymentDate
        decimal Amount
    }
    
    Salons ||--o{ Employees : "employs"
    Salons ||--o{ Services : "offers"
    Salons ||--o{ Appointments : "hosts"
    Employees ||--o{ Appointments : "handles"
    Services ||--o{ Appointments : "includes"
    Employees ||--o{ Salaries : "receives"