import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Car, Users, BookOpen, AlertTriangle, Phone } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-blue-900 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8" />
              <div>
                <h1 className="text-xl font-bold">Florida Highway Patrol</h1>
                <p className="text-blue-200 text-sm">Roleplay Division</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="#about" className="hover:text-blue-200 transition-colors">
                About
              </Link>
              <Link href="#recruitment" className="hover:text-blue-200 transition-colors">
                Join Us
              </Link>
              <Link href="#training" className="hover:text-blue-200 transition-colors">
                Training
              </Link>
              <Link href="#guidelines" className="hover:text-blue-200 transition-colors">
                Guidelines
              </Link>
              <Link href="#contact" className="hover:text-blue-200 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Protect and Serve Florida's Highways</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join our elite ER:LC roleplay server and experience the life of a Florida Highway Patrol trooper.
              Realistic scenarios, professional training, and dedicated Roblox community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Users className="mr-2 h-5 w-5" />
                Apply Now
              </Button>
              <Button size="lg" variant="outline">
                <BookOpen className="mr-2 h-5 w-5" />
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Active Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">Operations</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-200">Specialized Units</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-blue-200">Realism Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">About FHP Roleplay</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the most realistic Florida Highway Patrol ER:LC server with authentic procedures, professional
              training, and immersive Roblox gameplay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Authentic Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Real FHP procedures, protocols, and equipment. Experience law enforcement like never before.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Car className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Realistic Scenarios</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Traffic stops, pursuits, investigations, and emergency response scenarios based on real situations.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Professional Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Join a mature, dedicated community of roleplay enthusiasts committed to realism and professionalism.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recruitment Section */}
      <section id="recruitment" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Join Our Ranks</h3>
            <p className="text-xl text-gray-600">
              Ready to serve and protect? Here's what it takes to become an FHP trooper.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-2xl font-bold mb-6">Requirements</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Badge className="mt-1">✓</Badge>
                  <div>
                    <h5 className="font-semibold">Age Requirement</h5>
                    <p className="text-gray-600">Must be 13+ years old</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge className="mt-1">✓</Badge>
                  <div>
                    <h5 className="font-semibold">Roblox Account</h5>
                    <p className="text-gray-600">Active Roblox account with ER:LC access</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge className="mt-1">✓</Badge>
                  <div>
                    <h5 className="font-semibold">Activity</h5>
                    <p className="text-gray-600">Minimum 8 hours per week on server</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge className="mt-1">✓</Badge>
                  <div>
                    <h5 className="font-semibold">Discord</h5>
                    <p className="text-gray-600">Discord account for communication</p>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Application Process</CardTitle>
                <CardDescription>Follow these steps to join our team</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h5 className="font-semibold">Submit Application</h5>
                    <p className="text-sm text-gray-600">Join Discord and complete application</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h5 className="font-semibold">Background Check</h5>
                    <p className="text-sm text-gray-600">Review of roleplay history and references</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h5 className="font-semibold">Interview</h5>
                    <p className="text-sm text-gray-600">One-on-one interview with recruitment team</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h5 className="font-semibold">Academy Training</h5>
                    <p className="text-sm text-gray-600">Complete our comprehensive training program</p>
                  </div>
                </div>
                <Button className="w-full mt-6">Start Application</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section id="training" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Training Academy</h3>
            <p className="text-xl text-gray-600">
              Comprehensive ER:LC training program designed to prepare you for realistic patrol duties in-game.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <BookOpen className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Basic Academy</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• FHP History and Mission</li>
                  <li>• ER:LC Game Mechanics</li>
                  <li>• Traffic Laws and Procedures</li>
                  <li>• Radio Communications</li>
                  <li>• Vehicle Operations</li>
                </ul>
                <Badge className="mt-4">2 Weeks</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <AlertTriangle className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Field Training</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Supervised Patrol Shifts</li>
                  <li>• Traffic Stop Procedures</li>
                  <li>• Emergency Response</li>
                  <li>• Pursuit Protocols</li>
                  <li>• Court Testimony</li>
                </ul>
                <Badge className="mt-4">4 Weeks</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Specialized Units</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• K-9 Unit Training</li>
                  <li>• SWAT Operations</li>
                  <li>• Traffic Homicide</li>
                  <li>• Commercial Vehicle</li>
                  <li>• Aviation Unit</li>
                </ul>
                <Badge className="mt-4">Ongoing</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Guidelines Section */}
      <section id="guidelines" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Roleplay Guidelines</h3>
            <p className="text-xl text-gray-600">
              Essential rules and guidelines for maintaining our high standards of realism.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Do's</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Follow all FHP standard operating procedures</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Maintain professional demeanor at all times</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Use proper radio protocols and 10-codes</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Complete detailed incident reports</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Respect chain of command</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-red-600">Don'ts</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span>Break character during active roleplay</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span>Use excessive force without justification</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span>Ignore backup requests from fellow troopers</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span>Engage in unrealistic high-speed pursuits</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span>Discuss out-of-character topics on duty</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold text-gray-900 mb-8">Ready to Serve?</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the most professional and realistic Florida Highway Patrol ER:LC server today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Phone className="mr-2 h-5 w-5" />
              Join Our Discord
            </Button>
            <Button size="lg" variant="outline">
              <BookOpen className="mr-2 h-5 w-5" />
              Server Rules
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <h4 className="font-semibold mb-2">Recruitment</h4>
              <p className="text-gray-600">Discord Applications</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Training</h4>
              <p className="text-gray-600">In-Game Academy</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">General Info</h4>
              <p className="text-gray-600">Discord Server</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-6 w-6" />
                <span className="font-bold">FHP Roleplay</span>
              </div>
              <p className="text-blue-200 text-sm">
                Professional law enforcement roleplay community dedicated to realism and excellence.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-sm text-blue-200">
                <li>
                  <Link href="#" className="hover:text-white">
                    Application
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Training
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Handbook
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Discord
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Departments</h5>
              <ul className="space-y-2 text-sm text-blue-200">
                <li>Patrol Division</li>
                <li>Traffic Homicide</li>
                <li>K-9 Unit</li>
                <li>SWAT Team</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Contact</h5>
              <ul className="space-y-2 text-sm text-blue-200">
                <li>Discord Server</li>
                <li>Roblox Group</li>
                <li>24/7 ER:LC Server</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200 text-sm">
            <p>
              &copy; 2024 Florida Highway Patrol Roleplay. All rights reserved. Not affiliated with the real Florida
              Highway Patrol.
            </p>
            <p className="mt-2">
              Made with{" "}
              <span className="text-red-500">♥️</span> by{" "}
              <a
                href="https://hybridzdynamics.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                Hybridz Dynamics
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
